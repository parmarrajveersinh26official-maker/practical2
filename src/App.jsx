import Student from "./Components/Student";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Student Details
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        <Student
          name="Rahul Kumar"
          rollNo="101"
          course="BCA"
          marks="85%"
        />

        <Student
          name="Priya Singh"
          rollNo="102"
          course="BCA"
          marks="92%"
        />

        <Student
          name="Amit Sharma"
          rollNo="103"
          course="BCA"
          marks="78%"
        />
      </div>
    </div>
  );
}

export default App;