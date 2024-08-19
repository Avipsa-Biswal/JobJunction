import React from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import companiesTable from './CompaniesTable'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'

function Companies() {
    useGetAllCompanies();
    const navigate = useNavigate();
  return (
    <div>
        <Navbar/>
        <div className='max-w-6xl mx-auto my-10'>
            <div className='flex items-center justify-between my-5'>
                <input 
                    className="w-fit"
                    placeholder="Filter by name" 
                />
                <button onClick={() => navigate("/admin/companies/create")}>New Company</button>
            </div>
            <companiesTable/>
        </div>
    </div>
  )
}

export default Companies