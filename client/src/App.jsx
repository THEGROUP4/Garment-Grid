import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { themeSettings } from './theme.js';
import { 
    Administrators, Distribution, Dashboard, ProductCatalogue, CustomerDirectory, TransactionLedger, Demographics, Overview, DailyAnalytics, MonthlyAnalytics, AffiliateMetrics, Layout 
} from './scenes';

// boilerplate
function App() {
    const mode = useSelector((state) => state.global.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return (
        <div className="app">
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Routes>
                        <Route element={<Layout />}>
                            {/* Simulates signing in */}
                            <Route
                                path="/"
                                element={<Navigate to="/Garment-Grid/dashboard" replace />}
                            />
                            <Route path="/Garment-Grid/dashboard" element={<Dashboard />} />
                            <Route path='/Garment-Grid/product_catalogue' element={<ProductCatalogue />} />
                            <Route path='/Garment-Grid/customer_directory' element={<CustomerDirectory />} />
                            <Route path='/Garment-Grid/transaction_ledger' element={<TransactionLedger />} />
                            <Route path='/Garment-Grid/demographics' element={<Demographics />} />
                            <Route path='/Garment-Grid/overview' element={<Overview />} />
                            <Route path='/Garment-Grid/daily_analytics' element={<DailyAnalytics />} />
                            <Route path='/Garment-Grid/monthly_analytics' element={<MonthlyAnalytics />} />
                            <Route path='/Garment-Grid/distribution' element={<Distribution />} />
                            <Route path='/Garment-Grid/administrative' element={<Administrators />} />
                            <Route path='/Garment-Grid/affiliate_metrics' element={<AffiliateMetrics />} />
                        </Route>
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
