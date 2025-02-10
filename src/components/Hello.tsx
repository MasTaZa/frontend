function Hello(props: any){
    const a = props.a
    const b = props.b
    console.log(a)
    console.log(props.c)

    return <div>Hello {b}</div>
}

export default Hello