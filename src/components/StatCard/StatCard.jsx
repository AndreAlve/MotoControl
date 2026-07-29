import "./StatCard.css";

import { Card, CardContent, Typography } from "@mui/material";

function StatCard({ icon, title, value }) {
    return (
        <Card className="stat-card">
            <CardContent>

                <div className="stat-header">
                    <div className="stat-icon">
                        {icon}
                    </div>
                </div>

                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    {title}
                </Typography>

                <Typography
                    variant="h4"
                    fontWeight="bold"
                >
                    {value}
                </Typography>

            </CardContent>
        </Card>
    );
}

export default StatCard;