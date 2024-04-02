import { Typography, styled } from "@mui/material";

export const VisuallyHiddenInput = styled('input')({
    border : 0,
    clip : "rect(0 0 0 0)",
    height : 1,
    margin : -1,
    overflow : 'hidden',
    padding : onabort,
    position : "absolute",
    width : 1,
    whiteSpace : "nowrap"
})

export const InputError = ({error})=>{
    return (
        <Typography variant="caption" color="error" sx={{
            width:"fit-content",
            display:"block",
            margin : " 1rem auto"
        }}>
            {error}
        </Typography>
    )
}