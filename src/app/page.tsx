import Image from "next/image";
import Button from "./components/Button";

export default function Home() {
  return (
    <div>
      <Button btnText="Login" bgColor="bg-blue-700"/>
      <Button btnText="Logout" bgColor="bg-red-700"/>
      <Button btnText="Sign up" bgColor="bg-teal-600"/>
    </div>  
  );
}
