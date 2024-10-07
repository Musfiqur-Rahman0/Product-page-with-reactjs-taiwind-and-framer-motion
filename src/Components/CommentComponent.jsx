import React, { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";

const CommentComponent = ({ publishedDate }) => {
  const [timesAgo, setTimesAgo] = useState("");

  const formatTimeAgo = () => {
    setTimesAgo(
      formatDistanceToNow(new Date(publishedDate), { addSuffix: true })
    );
  };

  useEffect(() => {
    formatTimeAgo();
    const interval = setInterval(formatTimeAgo, 60000);
    return () => clearInterval(interval);
  }, [publishedDate]);

  return <p className="sm:text-sm text-[10px] text-muted">{timesAgo}</p>;
};

export default CommentComponent;
