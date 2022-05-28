import AuthForm from '../components/AuthFormComponent'; 
import {css} from '@emotion/css';

function LoginRoute() {

  const divStyle = css`
    display: flex;
    justify-content: center;
  `;

  return (
    <div className={divStyle}>
      <AuthForm type="login"/>
    </div>
  );
}

export default LoginRoute;