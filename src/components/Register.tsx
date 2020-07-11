import React, { FC, useRef, useState } from 'react'

interface Person{
    firstName: string;
    lastName?: string;
}

interface Props {
    password: number;
    beta?: boolean;     // optional
    intro?: () => void;
    person: Person;
}

const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log('stop!');
}

const Register: FC<Props> = ({ password, person: { firstName } }) => {

    const [count, setCount] = useState<string | number | undefined | null>(null);

    const [lastName, setLastName] = useState<Person>({ firstName: '' });

    // setCount(password);

    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLInputElement>(null);

    return (
        <div ref={divRef}>
            <p>
                {firstName}
            </p>
            <input onChange={onChange} type="text" ref={inputRef}/>
        </div>
    )
}

export default Register
