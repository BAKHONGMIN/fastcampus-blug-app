import React from "react";
import { Link } from "react-router-dom";

export default function PostDetail() {
  return (
    <div className="post_detail">
      <div className="post_box">
        <div className="post_title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="post_profile-box">
          <div className="post_profile"></div>
          <div className="post_author-name">패스트 캠퍼스</div>
          <div className="post_date">2024.03.14 목요일</div>
        </div>
        <div className="post_title">게시글</div>
        <div className="post_utils-box">
          <div className="post_delete">삭제</div>
          <div className="post_edit">
            <Link to={"/posts/edit/1"}>수정</Link>
          </div>
        </div>
        <div className="post_text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
    </div>
  );
}
