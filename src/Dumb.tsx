import React from 'react';

import dumbFunction from './dumbFunction';

export interface DumbProps {
    value: string
}

export default ({ value }: DumbProps) => {
    React.useEffect(() => {
        dumbFunction(value)
    }, [value])

    return <></>
}