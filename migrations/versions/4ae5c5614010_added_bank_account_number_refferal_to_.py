"""Added bank, account_number, refferal to client

Revision ID: 4ae5c5614010
Revises: 401c9d6f769b
Create Date: 2020-05-03 16:05:03.541916

"""
from alembic import op
import sqlalchemy as sa
import sqlalchemy_utils


# revision identifiers, used by Alembic.
revision = '4ae5c5614010'
down_revision = '401c9d6f769b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('client', sa.Column('account_number', sa.String(length=20), nullable=True))
    op.add_column('client', sa.Column('bank', sa.String(length=100), nullable=True))
    op.add_column('client', sa.Column('referral_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'client', 'category', ['referral_id'], ['id'], ondelete='CASCADE')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'client', type_='foreignkey')
    op.drop_column('client', 'referral_id')
    op.drop_column('client', 'bank')
    op.drop_column('client', 'account_number')
    # ### end Alembic commands ###
