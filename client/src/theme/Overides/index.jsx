
import Button from './Button'
import Typography from './Typography'


export default function ComponentsOverrides(theme){
    return Object.assign(
        Button(theme),
        // Typography(theme),

    );
}