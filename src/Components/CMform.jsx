import BasicButtons from "./CMbutton";
import Checkboxes from "./CMcheckbox";
import FullWidthTextField from "./CMfullwidth";
import BasicTextFields from "./CMinput";
import SelectInput from "./CMselect";

export default function Form() {
  return (
    <div className="card">
      <form action="">
        <br />
        <br />
        <div className="container">
          <b className="first">First Name</b>
          <b className="first">Second Name</b>
        </div>
        <BasicTextFields />

        <br />
        <br />
        <b>E-mail</b>
        <FullWidthTextField type="mail" />
        <br />
        <br />
        <b>Password</b>
        <FullWidthTextField type="password" />
        <br />
        <br />
        <b>Organization Name</b>
        <br />
        <FullWidthTextField type="ABC Organization" />
        <br />
        <br />
        <b>Organization Size</b>
        <SelectInput />
        <br />
        <br />
        <b>Industry</b>
        <SelectInput />
        <br />
        <div className="footer">
          <p className="para">
            Formstack has updated our terms of services effective from jan 01
            2024.
          </p>
          <p className="para">
            we wncourage you to read the document in its entirely
          </p>
        </div>
        <Checkboxes />
        <BasicButtons />
      </form>
    </div>
  );
}
