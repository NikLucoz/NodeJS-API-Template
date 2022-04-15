const { auth } = require("express-oauth2-jwt-bearer");
import Auth0_Config from "../../configs/Auth0_Config";

const checkJwt = auth({
    audience: Auth0_Config.AUDIENCE,
    issuerBaseURL: Auth0_Config.ISSUERBASEURL,
});


export { checkJwt };