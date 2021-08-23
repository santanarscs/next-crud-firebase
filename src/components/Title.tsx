function Title({children}) {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="px-5 py-2 text-2xl">{children}</h1>
      <hr className="border-4 border-purple-500"/>
    </div>
  )
}

export { Title }