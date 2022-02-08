import styled from "@emotion/styled";
import { Alert, Box, Button, ButtonTypeMap } from "@mui/material";
import React from "react";
import { useState } from 'react';
import { isChangeEvent } from "../../typeguards/Htmlguards";

const HiddenUpload = styled('input')({
  display: 'none'
})

type CommonProps = Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'>
type SingleExtProps = {
  multiple?: false
}
type SingleUploadProps = CommonProps & SingleExtProps
type MultiExtProps = {
  multiple: true
  // fileCount?: number
  maxFileCount?: number
  // minFileCount?: number
}
type MultiUploadProps = CommonProps & MultiExtProps

type UploadProps = (SingleUploadProps | MultiUploadProps) & {
  variant?: ButtonTypeMap['props']['variant']
}

export function getFileNames(source: React.ChangeEvent<HTMLInputElement> | HTMLInputElement['files']) {
  const fileNames: string[] = []
  if (isChangeEvent(source)) {
    const event = source;
    if (event.target.files)
      for (let i = 0; i < event.target.files.length; ++i)
        fileNames.push(event.target.files.item(i)!.name)
  }
  else {
    const files = source
    if (files)
      for (let i = 0; i < files.length; ++i)
        fileNames.push(files.item(i)!.name)
  }
  return fileNames
}

const UploadBtn = (props: UploadProps) => {
  const { children, variant, onChange, ...inputProps } = props
  const [warning, setWarning] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.multiple && e.target.files) {
      const fileCount = e.target.files.length
      if (props.maxFileCount && props.maxFileCount < fileCount)
        setWarning(`You can upload up to ${props.maxFileCount} files.`)
      else setWarning('')
    }
    if (onChange) onChange(e)
  }
  return (
    <Box>
      <HiddenUpload id="contained-button-file"
        type="file" onChange={handleChange} {...inputProps} />
      <label htmlFor="contained-button-file">
        <Button variant={variant} component="span" color={!warning ? 'primary' : 'warning'}>
          {children}
        </Button>
      </label>
      {!!warning && <Alert severity="warning">{warning}</Alert>}
    </Box>
  )
}

export default UploadBtn