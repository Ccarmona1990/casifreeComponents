
interface TextReviewOwnProps {
    review: string | undefined;
}

const TextReview: React.FC <TextReviewOwnProps> = ({review}) => {
    const ellipsify = (str: any) => {
        const charsToShow = 50;
        if (str.length > charsToShow) {
            return (str.substring(0, charsToShow) + "...");
        } else {
            return str;
        }
    }
    return (
        <p className="fst-italic fw-light">
            {ellipsify(review)}
        </p>
    )
}
export default TextReview