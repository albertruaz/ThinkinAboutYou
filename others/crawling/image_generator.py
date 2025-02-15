from PIL import Image, ImageDraw, ImageFont
import os
from config import IMAGE_WIDTH, FONT_SIZE, FONT_PATH, OUTPUT_DIR

class ImageGenerator:
    def __init__(self):
        self.width = IMAGE_WIDTH
        self.font_size = FONT_SIZE
        self.font = ImageFont.truetype(FONT_PATH, self.font_size)
        
        # 출력 디렉토리 생성
        if not os.path.exists(OUTPUT_DIR):
            os.makedirs(OUTPUT_DIR)

    def generate_comment_image(self, comment, index):
        """댓글을 이미지로 변환"""
        text_lines = [
            f"작성자: {comment['author']}",
            f"좋아요 수: {comment['like_count']}",
            f"작성일: {comment['published_at']}",
            "",
            comment['text'],
        ]
        text_full = "\n".join(text_lines)

        # 이미지 높이 계산
        lines_count = text_full.count("\n") + 1
        height = (lines_count * (self.font_size + 5)) + 20

        # 이미지 생성
        img = Image.new("RGB", (self.width, height), color=(255, 255, 255))
        draw = ImageDraw.Draw(img)
        
        # 텍스트 그리기
        draw.text((10, 10), text_full, fill=(0, 0, 0), font=self.font)

        # 이미지 저장
        output_path = os.path.join(OUTPUT_DIR, f"comment_{index}.png")
        img.save(output_path)
        return output_path 