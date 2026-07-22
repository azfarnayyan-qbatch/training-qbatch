import dayjs from "dayjs";
import { Separator } from "../../shad-ui/components/ui/separator";

function Header() {
  return (
    <>
      <header className="rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white shadow-lg">
        <h1 className="text-4xl font-bold tracking-tight">
          🎓 Student Dashboard
        </h1>

        <p className="mt-2 text-indigo-100">
          Manage and explore student information
        </p>

        <p className="mt-4 text-sm">{dayjs().format("dddd, DD MMMM YYYY")}</p>
      </header>

      <Separator className="my-8" />
    </>
  );
}

export default Header;
