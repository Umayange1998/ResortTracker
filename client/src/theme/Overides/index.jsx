
import Button from './Button';
import Typography from './Typography';
import Link from './Link';



export default function ComponentsOverrides(theme){
    return Object.assign(
        Button(theme),
        // Typography(theme),
        Link(theme),


    );
}