import "./FormBox.css";

const FormBox = ({ title, children }) => {
    return (
        <article className="form__box">
            <div className="form__box-content">
                <div className="form__box-content-heading">
                    <h1 className="form__box-content-heading-title">
                        {title}
                    </h1>
                </div>
                {children}
            </div>
        </article>
    );
}

export default FormBox;