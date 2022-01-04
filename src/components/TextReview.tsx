
interface TextReviewOwnProps {
    review: string | undefined;
}

const TextReview: React.FC <TextReviewOwnProps> = ({review}) => {
    return (
        <p className="fst-italic fw-light">
            {review}
        </p>
    )
}
export default TextReview