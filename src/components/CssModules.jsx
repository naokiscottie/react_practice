import classes from "./CssModules.module.scss"

export const CssModules = () => {
    return(
        <div>
            <p className={classes.title}>CssModules</p>
            <button>ボタン</button>
        </div>
    );
};