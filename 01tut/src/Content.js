const Content = () => {
    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const number = Math.floor(Math.random()*3);
        return names[number];
      }
    return (
        <main>
            <p>Hello {handleNameChange()}</p>
        </main>
    )
}

export default Content