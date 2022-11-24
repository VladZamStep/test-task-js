import Title from "./Title";

const ErrorMessage = ({ text }) => {
    return (
        <div className="pt-1 pl-1">
            <Title variant="error" text={text} />
        </div>
    )
};
export default ErrorMessage;