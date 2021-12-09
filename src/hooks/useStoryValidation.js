import PropTypes from "prop-types";

export default function useStoryValidation(story) {
  var title =
    typeof story._highlightResult == "object" &&
    typeof story._highlightResult.title == "object" &&
    typeof story._highlightResult.title.value == "string"
      ? story._highlightResult.title.value
      : typeof story.title == "string"
      ? story.title
      : "Title is missing for this result!";
  var url = typeof story.url == "string" ? story.url : "#";
  var points = typeof story.points == "number" ? story.points : 0;
  var author = typeof story.author == "string" ? story.author : "";
  var num_comments =
    typeof story.num_comments == "number" ? story.num_comments : 0;

  return {
    title,
    url,
    points,
    author,
    num_comments,
  };
}
useStoryValidation.propTypes = {
  story: PropTypes.object.isRequired,
};
