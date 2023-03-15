
export const ChildLayout = ({ children }) => {
  return (
    <div style={{
        backgroundColor: "#ffffff",
        borderRadius: "5px",
        padding: "10px",
        color: "black"
    }}>
    <h3>ChildLayout</h3>
        { children }
    </div>
  )
}
