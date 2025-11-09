export default function Die(props) {
  return props.held ? (
    <button
      onClick={() => props.hold()}
      className="bg-green-400 h-25 w-25 rounded-xl shadow-xl hover:scale-95 hover:shadow-2xl transition transform text-4xl font-bold"
    >
      {props.value}
    </button>
  ) : (
    <button
      onClick={() => props.hold()}
      className="bg-gray-300 h-25 w-25 rounded-xl shadow-xl hover:scale-95 hover:shadow-2xl transition transform text-4xl font-bold"
    >
      {props.value}
    </button>
  );
}
