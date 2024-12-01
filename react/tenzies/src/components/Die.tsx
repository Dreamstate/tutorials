type DieProps = {
    id: string
    value: number
    isHeld: boolean
    holdDie: (id:string) => void
}

export default function Die(props: DieProps) {
    const styles = {
        backgroundColor: props.isHeld ? '#59E391' : 'white'
    }
  return (
      <button 
      style={styles} 
      onClick={() => props.holdDie(props.id)}
      aria-pressed={props.isHeld}
      aria-label={`Die with value ${props.value},
         ${props.isHeld ? 'held' : 'not held'}`}
      >{props.value}</button>
  )
}