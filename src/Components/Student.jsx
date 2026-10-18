function Student(props) {
  return (
    <div className="w-72 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {props.name}
      </h2>

      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Roll No:</span> {props.rollNo}
      </p>

      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Course:</span> {props.course}
      </p>

      <p className="text-gray-600">
        <span className="font-semibold">Marks:</span> {props.marks}
      </p>
    </div>
  );
}

export default Student;