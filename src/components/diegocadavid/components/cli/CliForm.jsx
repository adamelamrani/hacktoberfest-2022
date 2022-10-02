import React, { useState } from 'react'

const CliForm = () => {
	const [rangePassword, setRangePassword] = useState(10);
	const handleChange = (e) => {
		setRangePassword(e.target.value);
	}

	return <div className='bg-slate-100 p-3 flex flex-col gap-3 items-center'>
		<p className='text-center'>Rango ({rangePassword}) </p>
		<input type="range" min={8} max={18} onChange={handleChange} value={rangePassword}  className='appearance-none h-0.5 bg-zinc-400 cursor-pointer'/>
		<button className='group ring-1 bg-slate-100 hover:bg-sky-100 ring-slate-500/40 hover:ring-sky-600/40 ring-offset-2 mt-4 p-3 transition-colors ease-linear rounded-sm relative'> 
		<div className='z-10 relative'> Generar </div>
		<div className='absolute group-hover:bg-sky-200 transition-colors ease-linear bg-slate-200 inset-x-0 bottom-0 top-1/2 rounded-b-sm'></div>
		</button>
	</div>
}

export default CliForm
