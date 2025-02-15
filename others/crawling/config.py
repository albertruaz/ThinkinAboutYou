import os
from dotenv import load_dotenv

# .env 파일 로드
load_dotenv()

# YouTube API 설정
YOUTUBE_API_KEY = os.getenv('YOUTUBE_API_KEY')

# 이미지 생성 설정
IMAGE_WIDTH = 800
FONT_SIZE = 20
FONT_PATH = "arial.ttf"  # 시스템에 설치된 폰트 경로로 변경 필요

# 필터링 설정
MIN_LIKES = 10
SPAM_KEYWORDS = ['광고', '스팸']

# 출력 디렉토리 설정
OUTPUT_DIR = "output" 