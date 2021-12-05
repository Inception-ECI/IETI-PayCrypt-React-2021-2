import {Redirect, Route} from 'react-router-dom';

export const PrivateRoute = ({component: Comp, loggedIn, path, ...rest}) => {

    return (
        <Route
            path={path}
            {...rest}
            render={(props) => {
                return loggedIn ? (
                    <Comp {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: {
                                prevLocation: path,
                                error: "You need to login first!",
                            },
                        }}
                    />
                );
            }}
        />
    );
};