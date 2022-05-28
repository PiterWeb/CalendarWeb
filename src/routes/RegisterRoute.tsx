import AuthForm from '../components/AuthFormComponent'; 
import {css} from '@emotion/css';

function RegisterRoute() {

  const divStyle = css`
    display: flex;
    justify-content: center;
  `;

  return (
    <div className={divStyle}>
      <AuthForm type="register"/>
    </div>
  );
}

export default RegisterRoute;