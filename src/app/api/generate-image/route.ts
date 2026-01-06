import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const outputDir = './public/assets/images';

async function ensureOutputDir() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { prompt, size = '1440x720', filename = 'hero-makeup.jpg' } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    await ensureOutputDir();

    const zai = await ZAI.create();

    const response = await zai.images.generations.create({
      prompt: prompt,
      size: size
    });

    if (!response.data || !response.data[0] || !response.data[0].base64) {
      throw new Error('Invalid response from image generation API');
    }

    const imageBase64 = response.data[0].base64;
    const buffer = Buffer.from(imageBase64, 'base64');
    
    const filepath = path.join(outputDir, filename);
    fs.writeFileSync(filepath, buffer);

    return NextResponse.json({
      success: true,
      imageUrl: `/assets/images/${filename}`,
      prompt: prompt,
      size: size,
      fileSize: buffer.length
    });
  } catch (error: any) {
    console.error('Image generation error:', error);
    return NextResponse.json({
      success: false,
      error: error.message || 'Failed to generate image'
    }, { status: 500 });
  }
}
