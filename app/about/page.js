export default function About() {
  if(Math.random() > 0.5) throw new Error('oops')

  return <div>About Page Content</div>;
}