
export default function registerAction({ request }) {
  const formData = request.formData();
  const data = Object.fromEntries(formData);
  console.log("Data from action", data)
  return data;
}