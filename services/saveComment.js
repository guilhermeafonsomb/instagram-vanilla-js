const saveComment = (comment) => { //service
    const allComments = JSON.parse(localStorage.getItem("comments"));
    
    allComments.push(comment);
    localStorage.setItem("comments", JSON.stringify(allComments));
};

export { saveComment };

