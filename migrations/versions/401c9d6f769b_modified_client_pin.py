"""Modified Client Pin

Revision ID: 401c9d6f769b
Revises: dd8f978c9d5f
Create Date: 2020-05-02 09:03:44.334453

"""
from alembic import op
import sqlalchemy as sa
import sqlalchemy_utils
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '401c9d6f769b'
down_revision = 'dd8f978c9d5f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('client_pin', sa.Column('pin', sa.String(length=100), nullable=False))
    op.create_unique_constraint(None, 'client_pin', ['pin'])
    op.drop_column('client_pin', 'Used')
    op.drop_column('client_pin', 'title')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('client_pin', sa.Column('title', mysql.VARCHAR(length=100), nullable=False))
    op.add_column('client_pin', sa.Column('Used', mysql.TINYINT(display_width=1), autoincrement=False, nullable=True))
    op.drop_constraint(None, 'client_pin', type_='unique')
    op.drop_column('client_pin', 'used')
    op.drop_column('client_pin', 'pin')
    # ### end Alembic commands ###
