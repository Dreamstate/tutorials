import Header from './components/Header';
import Entry from './components/Entry';
import journalData from './data';


export default function App() {
  const journalElements = journalData.map(data => {
    return <Entry key={data.id} {...data} />
  })
  return (
    <>
    <Header />
    {journalElements}
    </>
  )
}
