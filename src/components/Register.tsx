import React, { FC, useState } from 'react'

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

const Register: FC<Props> = ({ password, person: { firstName } }) => {

    const [count, setCount] = useState<string | number | undefined | null>(null);

    const [lastName, setLastName] = useState<Person>({ firstName: '' });

    setCount(password);

    return (
        <div>
            <p>
                {firstName}
            </p>
        </div>
    )
}

export default Register
