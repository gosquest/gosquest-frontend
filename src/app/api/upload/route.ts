import { NextResponse, NextRequest } from "next/server";
import path from "path";
import { writeFile, mkdir } from "fs/promises";
import fs from "fs";
import crypto from "crypto";

const generateRandomFileName = (originalName: string): string => {
  const ext = path.extname(originalName);
  const baseName = path.basename(originalName, ext).replace(/\s+/g, '');
  const randomString = crypto.randomBytes(16).toString("hex");
  return `${baseName}_${randomString}${ext}`;
};

const ensureDirectoryExists = async (directory: string) => {
  if (!fs.existsSync(directory)) {
    await mkdir(directory, { recursive: true });
  }
};

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const formData = await req.formData();
    
    const file = formData.get("file") as File;
    const folder = formData.get("folder") as string;

    if (!file || !folder) {
      return NextResponse.json({ error: "File or folder type missing" }, { status: 400 });
    }

    const folderPath = path.join(process.cwd(), `public/projects/${folder}`);
    await ensureDirectoryExists(folderPath);

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = generateRandomFileName(file.name);
    const filePath = path.join(folderPath, filename);

    await writeFile(filePath, buffer);

    return NextResponse.json({ message: "Success", status: 201, filename });
  } catch (error) {
    console.error("Error occurred", error);
    return NextResponse.json({ message: "Failed", status: 500 });
  }
};

export const DELETE = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const { fileName, folder } = await req.json();

    if (!fileName || !folder) {
      return NextResponse.json({ error: "File name and folder are required" }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), `public/projects/${folder}`, fileName);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      return NextResponse.json({ success: true, message: "File deleted successfully!" }, { status: 200 });
    } else {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error deleting file:", error);
    return NextResponse.json({ error: "Error deleting file" }, { status: 500 });
  }
};
