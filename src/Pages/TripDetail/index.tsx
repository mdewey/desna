

type Props = {
  thing: string
}

export default function index({ thing = "" }: Props) {
  return (
    <div>Trip Details! {thing}</div>
  )
}

