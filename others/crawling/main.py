from youtube_crawler import YoutubeCrawler
from image_generator import ImageGenerator

def main():
    # 비디오 ID 설정
    video_id = "YOUR_VIDEO_ID"  # 예: "dQw4w9WgXcQ"
    
    # 크롤러 초기화
    crawler = YoutubeCrawler()
    
    # 댓글 수집
    print("댓글 수집 중...")
    comments = crawler.get_comments(video_id, max_results=10)
    print(f"수집된 댓글 수: {len(comments)}")
    
    # 이미지 생성기 초기화
    generator = ImageGenerator()
    
    # 각 댓글을 이미지로 변환
    print("이미지 생성 중...")
    for i, comment in enumerate(comments):
        output_path = generator.generate_comment_image(comment, i)
        print(f"이미지 생성 완료: {output_path}")

if __name__ == "__main__":
    main() 