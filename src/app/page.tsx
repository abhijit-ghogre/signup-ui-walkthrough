import Header from "~/app/_components/header/header";
import Input from "~/app/_components/Input";

export default async function Home() {
  return (
    <main className="leading-none">
      <Header />

      <div className={"mt-[40px] flex justify-center px-4"}>
        <div className="w-full max-w-[576px] rounded-[20px] border border-[#C1C1C1] px-[20px] pb-[130px] pt-[40px] sm:px-[60px] ">
          <div className={"flex flex-col gap-[32px]"}>
            <div className={"text-center text-[32px] font-semibold"}>
              Create your account
            </div>
            <Input name={"name"} label={"Name"} placeholder={"Enter"} />
            <Input name={"email"} label={"Email"} placeholder={"Enter"} />
            <Input
              name={"password"}
              type={"password"}
              label={"Password"}
              placeholder={"Enter"}
            />
            <button
              className={"h-[56px] w-full rounded-[6px] bg-black text-white"}
            >
              CREATE ACCOUNT
            </button>
          </div>

          <div className={"mt-[48px] text-center text-[16px]"}>
            Have an Account?
            <span className={"pl-[11px] text-[16px] font-medium"}>LOGIN</span>
          </div>
        </div>
      </div>
    </main>
  );
}
