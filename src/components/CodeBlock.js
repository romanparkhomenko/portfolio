import React from "react"

export default function CodeBlock(props) {
  return (
    <div className="code-block">
      <div className="code">{props.title} {"{"}</div>
        {props.children}
      <div className="code">{"}"}</div>
    </div>
  )
}
