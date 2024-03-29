"""Created Admin ROle

Revision ID: dc3b5bc8376f
Revises: b60b2f8c490c
Create Date: 2020-04-28 13:39:36.524314

"""
from alembic import op
import sqlalchemy as sa
import sqlalchemy_utils
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = 'dc3b5bc8376f'
down_revision = 'b60b2f8c490c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('admin_role',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=100), nullable=False),
    sa.Column('description', sa.Text(), nullable=False),
    sa.Column('created', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.add_column('user', sa.Column('created', sa.DateTime(), nullable=True))
    op.drop_column('user', 'craeted')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('craeted', mysql.DATETIME(), nullable=True))
    op.drop_column('user', 'created')
    op.drop_table('admin_role')
    # ### end Alembic commands ###
