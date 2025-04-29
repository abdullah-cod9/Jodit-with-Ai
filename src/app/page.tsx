import MyJodit from "@/components/Jodit/Jodit";
export default function Home() {
  return (
   <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="  flex items-center justify-center">
        <MyJodit userId={""} />
      </div>
   </div>
  );
}
