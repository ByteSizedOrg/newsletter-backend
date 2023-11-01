export default function Navbar() {
  return (
    <div className="flex flex-row justify-between">
      <div className="p-4 text-4xl font-semibold">
        Bash<span className="text-green-500">Cat</span>
      </div>
      <div className="flex flex-row space-x-4 p-4">
        <span>Advertise</span>
        <span>Privacy</span>
      </div>
    </div>
  );
}
