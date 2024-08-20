import React from 'react'
import { Table, TableCaption, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'

const companiesTable = () => {
    
    const { companies,searchCompanyByText } = useSelector(store => store.company);
    const [filterCompany, setFilterCompany] = usesState(companies);
    const navigate = useNavigate();
    useEffect(()=>{
        const filteredCompany = companies.length >= 0 && companies.filter((company) =>{
            if(!searchCompanyByText){
                return true
            };
            return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase())

        })
        setFilterCompany(filteredCompany);
    },[companies,searchCompanyByText])
    return (
        <div>
            <Table>
                <TableCaption>A List of your recent registered companies</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        companies.length <= 0 ? <span>You haven't registered any company yet.</span> : (
                            <>
                                {
                                    filterCompany?.map((company) => (
                                        <tr>
                                            <TableCell>
                                                <Avatar>
                                                    <AvatarImage src={company.logo} />
                                                </Avatar>
                                            </TableCell>
                                            <TableCell>{company.name}</TableCell>
                                            <TableCell>{company.createdAt.split("T")[0]}</TableCell>
                                            <TableCell className="text-right cursor-pointer">
                                                <Popover>
                                                    <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                                    <PopoverContent className="w-32">
                                                        <div onClick={() => navigate(`/admin/companies/${company._id} `)} className='flex items-center gap-2 w-fit cursor-pointer'>
                                                            <Edit2 className='w-4' />
                                                            <span>Edit</span>
                                                        </div>

                                                    </PopoverContent>
                                                </Popover>
                                            </TableCell>

                                        </tr>

                                    ))
                                }

                            </>
                        )
                    }

                </TableBody>
            </Table>
        </div>
    )
}

export default companiesTable
