from googleapiclient.discovery import build
from config import YOUTUBE_API_KEY, MIN_LIKES, SPAM_KEYWORDS
import os

class YoutubeCrawler:
    def __init__(self):
        self.youtube = build("youtube", "v3", developerKey=YOUTUBE_API_KEY)
    
    def get_comments(self, video_id, max_results=100):
        """유튜브 비디오의 댓글을 수집"""
        comments_data = []
        request = self.youtube.commentThreads().list(
            part="snippet",
            videoId=video_id,
            maxResults=max_results,
            textFormat="plainText",
            order="relevance"
        )

        while request is not None:
            response = request.execute()
            for item in response["items"]:
                comment = self._parse_comment(item)
                if self._filter_comment(comment):
                    comments_data.append(comment)

            # 다음 페이지 확인
            if "nextPageToken" in response and len(comments_data) < max_results:
                request = self.youtube.commentThreads().list(
                    part="snippet",
                    videoId=video_id,
                    maxResults=max_results,
                    pageToken=response["nextPageToken"],
                    textFormat="plainText",
                    order="relevance"
                )
            else:
                break

        return comments_data[:max_results]

    def _parse_comment(self, item):
        """댓글 데이터 파싱"""
        snippet = item["snippet"]["topLevelComment"]["snippet"]
        return {
            "author": snippet["authorDisplayName"],
            "text": snippet["textDisplay"],
            "like_count": snippet["likeCount"],
            "published_at": snippet["publishedAt"]
        }

    def _filter_comment(self, comment):
        """댓글 필터링"""
        # 최소 좋아요 수 체크
        if comment["like_count"] < MIN_LIKES:
            return False
        
        # 스팸 키워드 체크
        for keyword in SPAM_KEYWORDS:
            if keyword in comment["text"]:
                return False
        
        return True 